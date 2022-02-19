/* global cy, Cypress */
describe('/api', () => {
  describe('/image', () => {
    it('Should return a data url', () => {
      cy.request({
        url: '/api/image',
        method: 'POST',
        headers: {
          origin: Cypress.config().baseUrl,
        },
        body: {
          state:
            'JTdCJTIycGFkZGluZ1ZlcnRpY2FsJTIyJTNBJTIyNDhweCUyMiUyQyUyMnBhZGRpbmdIb3Jpem9udGFsJTIyJTNBJTIyMzJweCUyMiUyQyUyMm1hcmdpblZlcnRpY2FsJTIyJTNBJTIyNDVweCUyMiUyQyUyMm1hcmdpbkhvcml6b250YWwlMjIlM0ElMjI0NXB4JTIyJTJDJTIyYmFja2dyb3VuZEltYWdlJTIyJTNBbnVsbCUyQyUyMmJhY2tncm91bmRJbWFnZVNlbGVjdGlvbiUyMiUzQW51bGwlMkMlMjJiYWNrZ3JvdW5kTW9kZSUyMiUzQSUyMmltYWdlJTIyJTJDJTIyYmFja2dyb3VuZENvbG9yJTIyJTNBJTIycmdiYSgxNzElMkMlMjAxODQlMkMlMjAxOTUlMkMlMjAxKSUyMiUyQyUyMmRyb3BTaGFkb3clMjIlM0F0cnVlJTJDJTIyZHJvcFNoYWRvd09mZnNldFklMjIlM0ElMjIyMHB4JTIyJTJDJTIyZHJvcFNoYWRvd0JsdXJSYWRpdXMlMjIlM0ElMjI2OHB4JTIyJTJDJTIydGhlbWUlMjIlM0ElMjJzZXRpJTIyJTJDJTIyd2luZG93VGhlbWUlMjIlM0ElMjJub25lJTIyJTJDJTIybGFuZ3VhZ2UlMjIlM0ElMjJ0ZXh0JTJGeC1waHAlMjIlMkMlMjJmb250RmFtaWx5JTIyJTNBJTIySGFjayUyMiUyQyUyMmZvbnRTaXplJTIyJTNBJTIyMTRweCUyMiUyQyUyMmxpbmVIZWlnaHQlMjIlM0ElMjIxMzMlMjUlMjIlMkMlMjJ3aW5kb3dDb250cm9scyUyMiUzQXRydWUlMkMlMjJ3aWR0aEFkanVzdG1lbnQlMjIlM0F0cnVlJTJDJTIybGluZU51bWJlcnMlMjIlM0FmYWxzZSUyQyUyMmV4cG9ydFNpemUlMjIlM0ElMjIyeCUyMiUyQyUyMndhdGVybWFyayUyMiUzQWZhbHNlJTJDJTIyc3F1YXJlZEltYWdlJTIyJTNBZmFsc2UlMkMlMjJsb2FkaW5nJTIyJTNBZmFsc2UlMkMlMjJ1cGxvYWRpbmclMjIlM0FmYWxzZSUyQyUyMm9ubGluZSUyMiUzQXRydWUlMkMlMjJwcmVzZXQlMjIlM0FudWxsJTJDJTIydGl0bGVCYXIlMjIlM0ElMjIlMjIlMkMlMjJ0aW1lc3RhbXAlMjIlM0FmYWxzZSUyQyUyMmFzcGVjdFJhdGlvJTIyJTNBMi4yNDExMDc3MjM1NzcyMzYlN0Q%3D',
        },
      }).then(res => {
        expect(res.body).to.contain('data:image/png;base64,')
      })
    })
  })
  describe('/oembed', () => {
    it('Should return correct json response', () => {
      cy.request('/api/oembed?url=https://carbon.now.sh').then(res => {
        expect(res.headers).to.include({
          'access-control-allow-origin': '*',
          'access-control-allow-headers': '*',
        })
        expect(res.body).to.have.property('type', 'rich')
        expect(res.body).to.have.property('provider_name', 'Carbon')
        expect(res.body).to.have.property('width', 1024)
        expect(res.body).to.have.property('height', 480)
        expect(res.body).to.have.property(
          'html',
          '<iframe\n  src="https://carbon.now.sh/embed?"\n  width="1024px"\n  height="480px"\n  style="width:1024px; height:480px; border:0; overflow:auto;"\n  sandbox="allow-scripts allow-same-origin"\n  scrolling="auto">\n</iframe>\n'
        )
      })
    })
  })
})
