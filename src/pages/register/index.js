// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

const defaultValues = {
  email: '',
  username: '',
  password: '',
  terms: false
}

// ** Styled Components
const RegisterIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const RegisterIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const { register } = useAuth()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const schema = yup.object().shape({
    password: yup.string().min(5).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    terms: yup.bool().oneOf([true], 'You must accept the privacy policy & terms')
  })

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, username, password } = data
    register({ email, username, password }, err => {
      if (err.email) {
        setError('email', {
          type: 'manual',
          message: err.email
        })
      }
      if (err.username) {
        setError('username', {
          type: 'manual',
          message: err.username
        })
      }
    })
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <RegisterIllustrationWrapper>
            <RegisterIllustration
              alt='register-illustration'
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
            />
          </RegisterIllustrationWrapper>
          <FooterIllustrationsV2 image={`/images/pages/auth-v2-register-mask-${theme.palette.mode}.png`} />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
            <img
            src='data:image/png;base64,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'
            alt='logo'
            width='30'
            height='30'
          />
              <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>Adventure starts here 🚀</TypographyStyled>
              <Typography variant='body2'>Make your app management easy and fun!</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='username'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      value={value}
                      onBlur={onBlur}
                      label='Username'
                      onChange={onChange}
                      placeholder='johndoe'
                      error={Boolean(errors.username)}
                    />
                  )}
                />
                {errors.username && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      label='Email'
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder='user@email.com'
                    />
                  )}
                />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  Password
                </InputLabel>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      label='Password'
                      onBlur={onBlur}
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.password.message}</FormHelperText>
                )}
              </FormControl>

              <FormControl sx={{ my: 0 }} error={Boolean(errors.terms)}>
                <Controller
                  name='terms'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <FormControlLabel
                        sx={{
                          ...(errors.terms ? { color: 'error.main' } : null),
                          '& .MuiFormControlLabel-label': { fontSize: '0.875rem' }
                        }}
                        control={
                          <Checkbox
                            checked={value}
                            onChange={onChange}
                            sx={errors.terms ? { color: 'error.main' } : null}
                          />
                        }
                        label={
                          <Fragment>
                            <Typography
                              variant='body2'
                              component='span'
                              sx={{ color: errors.terms ? 'error.main' : '' }}
                            >
                              I agree to{' '}
                            </Typography>
                            <Typography
                              href='/'
                              variant='body2'
                              component={Link}
                              sx={{ color: 'primary.main', textDecoration: 'none' }}
                              onClick={e => e.preventDefault()}
                            >
                              privacy policy & terms
                            </Typography>
                          </Fragment>
                        }
                      />
                    )
                  }}
                />
                {errors.terms && (
                  <FormHelperText sx={{ mt: 0, color: 'error.main' }}>{errors.terms.message}</FormHelperText>
                )}
              </FormControl>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                Sign up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
                <Typography href='/login' component={Link} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                  Sign in instead
                </Typography>
              </Box>
              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: theme => `${theme.spacing(5)} !important`,
                  mb: theme => `${theme.spacing(7.5)} !important`
                }}
              >
                or
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
