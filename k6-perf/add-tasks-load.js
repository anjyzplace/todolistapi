import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 20,
  duration: "30s"
};

export default function() {
  let formdata = { "name": "Load Test Toilet Task" };
  let headers = { "Content-Type": "application/x-www-form-urlencoded" };
  let res = http.post("http://localhost:3001/tasks", formdata, { headers: headers });
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(1);
};