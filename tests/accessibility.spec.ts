// Removed
    // Ensure focus is trapped appropriately
    await page.keyboard.press('Tab');
    await expect(page.locator('.cert-verify-link')).toBeFocused();
  });
});
