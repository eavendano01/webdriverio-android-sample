
import LoginScreen from '../../pageobjects/android/LoginScreen'
import HomeScreen from '../../pageobjects/android/HomeScreen'
import FormsScreen from '../../pageobjects/android/FormsScreen'

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

  it('Forms components - Android App', async () => {
    // Navegar al tab de Forms usando el HomeScreen
    await HomeScreen.formsTab.click()
    // Esperar a que el forms screen esté visible
    await expect($("~Forms-screen")).toBeDisplayed()
    // Ingresar los valores en la pestaña de Forms
    await FormsScreen.typeSomething('Hello World!')
  })
})