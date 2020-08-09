import { Controller, Get } from '@nestjs/common'
import { DNSHealthIndicator, HealthCheck, HealthCheckService } from '@nestjs/terminus'

@Controller('health')
export class HealthController {

  @Get()
  @HealthCheck()
  check() {
    return { status: 'ok' }
  }
}
