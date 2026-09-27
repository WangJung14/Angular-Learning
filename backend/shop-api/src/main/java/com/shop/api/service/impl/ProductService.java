package com.shop.api.service.impl;

import com.shop.api.model.Product;
import com.shop.api.repository.IProductRepository;
import com.shop.api.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
  private final IProductRepository productRepository;

  @Override
  @Transactional(readOnly = true)
  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }
}
