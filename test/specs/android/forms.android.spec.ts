import HomeScreen from '../../pageobjects/android/HomeScreen'
import FormsScreen from '../../pageobjects/android/FormsScreen'

describe('Forms Feature - Android App', () => {
  
  it('Should navigate in the Forms page', async () => {
    // Navegar al tab de Forms usando el HomeScreen
    await HomeScreen.formsTab.click()
    // Esperar a que el forms screen esté visible
    await expect($("~Forms-screen")).toBeDisplayed()
    // Ingresar los valores en la pestaña de Forms
    await FormsScreen.typeSomething('Hello World!')
    // Acciones como click en el botón de switch, seleccionar un dropdown y hacer click en los botones
    await FormsScreen.switchButton()
    await FormsScreen.selectDropdown()
    await FormsScreen.clickButtons()
  })
})