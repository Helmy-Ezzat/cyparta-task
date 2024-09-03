import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  profile: Profile | null
  login: (email: string, password: string) => Promise<void>
  fetchProfile: () => Promise<void>
  logout: () => void
}

export interface Profile {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string | null
  bio: string | null
  is_superuser: boolean
  is_staff: boolean
  image: string
  cover: string
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      profile: null,
      login: async (email, password) => {
        try {
          const response = await fetch(
            'https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            }
          )

          if (response.ok) {
            const data = await response.json()
            const { access, refresh } = data
            set({ accessToken: access, refreshToken: refresh })

            await get().fetchProfile()
          } else {
            throw new Error('Login failed')
          }
        } catch (error) {
          console.error('Error logging in:', error)
        }
      },
      fetchProfile: async () => {
        const { accessToken } = get()
        if (!accessToken) {
          throw new Error('No access token found')
        }

        try {
          const response = await fetch(
            'https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/',
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          )

          if (response.ok) {
            const profileData = await response.json()
            set({ profile: profileData })
          } else {
            throw new Error('Failed to fetch profile')
          }
        } catch (error) {
          console.error('Error fetching profile:', error)
        }
      },
      logout: () => {
        set({ accessToken: null, refreshToken: null, profile: null })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)
