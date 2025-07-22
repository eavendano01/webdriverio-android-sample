import HomeScreen from '../../pageobjects/android/HomeScreen';

describe('Home Feature - Android App', () => {
  it('should display home screen elements', async () => {
    await expect(HomeScreen.homeScreen).toBeDisplayed();
    await expect(HomeScreen.title).toBeDisplayed();
    await expect(HomeScreen.subtitle).toBeDisplayed();
    await expect(HomeScreen.supportText).toBeDisplayed();
    await expect(HomeScreen.homeTab).toBeDisplayed();
    await expect(HomeScreen.webviewTab).toBeDisplayed();
    await expect(HomeScreen.loginTab).toBeDisplayed();
    await expect(HomeScreen.formsTab).toBeDisplayed();
    await expect(HomeScreen.swipeTab).toBeDisplayed();
    await expect(HomeScreen.dragTab).toBeDisplayed();
  });
});
