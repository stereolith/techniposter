FROM openjdk:8-alpine

COPY target/uberjar/techniposter-backend.jar /techniposter-backend/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/techniposter-backend/app.jar"]
