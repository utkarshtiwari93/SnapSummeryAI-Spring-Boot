package com.generativeAi.AiSummary;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/research")
@AllArgsConstructor
public class ResearchController {

    private final ResearchService researchService;

    @PostMapping("/process")
    public Mono<ResponseEntity<String>> processContenet(@RequestBody ResearchRequest request) {
        return researchService.processContent(request)
                .map(ResponseEntity::ok);
    }

}
