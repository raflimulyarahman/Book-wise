import { Ratelimit } from "@upstash/ratelimit";
import redis from "@/database/redis";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "10 s"),
  prefix: "@upstash/ratelimit",
  analytics: true,
});

export default ratelimit;