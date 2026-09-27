package com.shop.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "name",nullable = false)
  private String name;

  @Column(name = "price",nullable = false)
  private Double price;

  @Column(name = "quantity",nullable = false)
  private Integer quantity;
}
