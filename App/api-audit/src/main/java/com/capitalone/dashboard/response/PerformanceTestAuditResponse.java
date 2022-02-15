package com.capitalone.dashboard.response;

import com.capitalone.dashboard.model.PerfTest;
import com.capitalone.dashboard.status.PerformanceTestAuditStatus;

import java.util.ArrayList;
import java.util.Collection;

public class PerformanceTestAuditResponse extends AuditReviewResponse<PerformanceTestAuditStatus> {
    private String url;
    private long lastExecutionTime;

    private Collection<PerfTest> result = new ArrayList<>();
    private Object buildArtifact;
    private String perfRisk;

    public Collection<PerfTest> getResult() {
        return result;
    }

    public void setResult(Collection<PerfTest> result) {
        this.result = result;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public long getLastExecutionTime() {
        return lastExecutionTime;
    }

    public void setLastExecutionTime(long lastExecutionTime) {
        this.lastExecutionTime = lastExecutionTime;
    }

    public Object getBuildArtifact() {
        return buildArtifact;
    }

    public void setBuildArtifact(Object buildArtifact) {
        this.buildArtifact = buildArtifact;
    }

    public String getPerfRisk() {
        return perfRisk;
    }

    public void setPerfRisk(String perfRisk) {
        this.perfRisk = perfRisk;
    }
}
