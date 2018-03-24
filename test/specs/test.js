describe('WDIOのテスト', () => {
    it('画面の表示', () => {
        browser.url('/');
        expect(browser.getTitle()).toBe('ポイントサイトなら高還元率のハピタス | ネットショッピングでお得に貯め て現金やギフト券に交換');
    });  
});
