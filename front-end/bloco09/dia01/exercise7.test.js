const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

      it('Verifica se a funcao funciona', (done) => {
          uppercase('rikelmy', (str) => {
            try {
                expect(str).toBe('RIKELMY');
                done();
            } catch (error) {
                done(error)
            }
          })})