abstract class Config {}

class Development extends Config {
    public urls = {
        admin: "http://localhost:8080/api/couponSys/admin",
        company: "http://localhost:8080/api/couponSys/company",
        customer: "http://localhost:8080/api/couponSys/customer",
        user: "http://localhost:8080/api/couponSys/user",
    };
}

class Production extends Config {
    public urls = {
        admin: "http://localhost:8080/api/couponSys/admin",
        company: "http://localhost:8080/api/couponSys/company",
        customer: "http://localhost:8080/api/couponSys/customer",
        user: "http://localhost:8080/api/couponSys/user",
    };
}

const global =
    process.env.NODE_ENV === "development"
        ? new Development()
        : new Production();
export default global;
