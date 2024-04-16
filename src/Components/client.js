import { createClient } from '@supabase/supabase-js'

const URL = 'https://igsgczcwugnszlufrhmg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnc2djemN3dWduc3psdWZyaG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4ODgyOTYsImV4cCI6MjAyODQ2NDI5Nn0.OqSuvkVGw0mbkduziPbZsQDiYQr25joCYJqFeVO037I';

export const supabase = createClient(URL, API_KEY);