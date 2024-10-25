package com.helloworld.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class MessageController {
	
	@GetMapping("/hello")
	public String hello(){
		return "hello world";
	}
	
	@GetMapping("/{text}")
	public String test(@PathVariable String text) {
		return text;
	}
}
