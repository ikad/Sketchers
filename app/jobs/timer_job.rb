class TimerJob < ActvieJob::Base

  def initialize(timer)
    @timer = timer
  end

  def perform
    
  end
end

timer_job = TimerJob.new("9:00")
timer_job.perform
