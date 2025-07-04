// Removed
  });

  test('should show verification links', async ({ page }) => {
    const googleCert = page.locator('.cert-verify-link').first();
    await expect(googleCert).toHaveAttribute('href', /coursera.org/);
    await expect(googleCert).toHaveAttribute('target', '_blank');
  });
});
