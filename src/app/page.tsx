import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Home() {
  return (
    <Stack sx={{ justifyContent: 'center', height: '100dvh', p: 2 }}>
      <Card>
        <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Sign up
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControl>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <TextField autoComplete="name" name="name" required fullWidth id="name" placeholder="Jon Snow" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              required
              fullWidth
              id="email"
              placeholder="your@email.com"
              name="email"
              autoComplete="email"
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              required
              fullWidth
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="new-password"
              variant="outlined"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive updates via email."
          />
          <Button type="submit" fullWidth variant="contained">
            Sign up
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <span>
              <Link href="/material-ui/getting-started/templates/sign-in/" variant="body2" sx={{ alignSelf: 'center' }}>
                Sign in
              </Link>
            </span>
          </Typography>
        </Box>
        <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button type="submit" fullWidth variant="outlined" startIcon={<GoogleIcon />}>
            Sign up with Google
          </Button>
          <Button type="submit" fullWidth variant="outlined" startIcon={<FacebookIcon />}>
            Sign up with Facebook
          </Button>
        </Box>
      </Card>
    </Stack>
  );
}
