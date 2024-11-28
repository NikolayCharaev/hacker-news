import catLoading from './assets/images/loading.gif'
import { Stack, Typography, useTheme } from '@mui/material'
const CatLoading = () => {
  const theme = useTheme()
  return (
    <Stack spacing={5} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <img style={{borderRadius: '20px'}} src={catLoading} alt="идет загрузка" />
      <Typography color={theme.palette.custom.white} variant='h4'>Загрузка</Typography>
    </Stack>
  )
}

export default CatLoading