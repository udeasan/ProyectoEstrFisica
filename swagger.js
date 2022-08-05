const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ["./routes/dateRoutes.js", "./routes/userRoutes.js", "./routes/utilRoutes.js"]

swaggerAutogen(outputFile, endpointsFiles)