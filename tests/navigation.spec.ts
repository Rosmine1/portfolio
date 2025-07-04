// Removed
    const webDevButton = page.locator('.skill-header').first();
    
    // Test expansion
    await webDevButton.click();
    await expect(page.locator('#web-dev-content')).toBeVisible();
    
    // Test collapse
    await webDevButton.click();
    await expect(page.locator('#web-dev-content')).toBeHidden();
  });
});
