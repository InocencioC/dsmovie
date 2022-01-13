package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.ScorePK;
import com.devsuperior.dsmovie.entities.Score;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
