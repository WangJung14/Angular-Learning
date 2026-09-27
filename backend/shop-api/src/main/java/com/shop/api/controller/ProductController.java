package com.shop.api.controller;

import com.shop.api.dto.response.ApiResponse;
import com.shop.api.model.Product;
import com.shop.api.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
  private final IProductService productService;

  @GetMapping
  public ResponseEntity<ApiResponse<List<Product>>> getAllProducts() {
    return ResponseEntity
      .status(HttpStatus.OK)
      .body(ApiResponse.success(productService.getAllProducts()));
  }
}
