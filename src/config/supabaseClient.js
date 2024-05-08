import { createClient } from '@supabase/supabase-js'


//const supabaseUrl = process.env.SUPABASE_URL
//const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabaseUrl = 'https://ouyjgsrjeigafizrwvbx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91eWpnc3JqZWlnYWZpenJ3dmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyOTk0NTIsImV4cCI6MjAyODg3NTQ1Mn0.mPXp5YRVx0BXL4REPenfqQTtW2616v0WDz4dfgTHUKE'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase