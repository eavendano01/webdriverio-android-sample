
import LoginScreen from '../../pageobjects/android/LoginScreen'
import HomeScreen from '../../pageobjects/android/HomeScreen'

describe('Login Feature - Android App', () => {
  it('should navigate to login tab and login with dummy credentials', async () => {
    // Navegar al tab de Login usando el HomeScreen
    await HomeScreen.loginTab.click()
    // Esperar a que el login screen esté visible
    await expect($("~Login-screen")).toBeDisplayed()
    // Realizar login con credenciales dummy
    await LoginScreen.login('dummy@email.com', 'dummyPassword')
    // Aquí podrías agregar una validación de la alerta si lo deseas
    await LoginScreen.alertMessage.click()   
  })
})