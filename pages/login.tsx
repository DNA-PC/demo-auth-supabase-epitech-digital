import {createClient} from '@supabase/supabase-js'
import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-react'

const supabase = createClient(
  'https://coxpwbnkgagcozlbytpl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNveHB3Ym5rZ2FnY296bGJ5dHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NTM3MjcsImV4cCI6MTk4ODMyOTcyN30.obzELs90h_moMcbSHMUGv12T4KzB3LJ_qqJOYRk7leg'
)

const Login = () => <Auth
  supabaseClient={supabase}
  appearance={{theme: ThemeSupa}}
  localization={{
    variables: {
      sign_in: {
        email_label: 'Ton adresse email',
        password_label: 'Ton mot de passe',
      },
    },
  }}
  magicLink={true}
/>

export default Login;
