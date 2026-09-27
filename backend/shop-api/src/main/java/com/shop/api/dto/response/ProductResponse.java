package com.shop.api.dto.response;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductResponse {
  private Long productId;
  private String productName;
  private Double productPrice;
  private Integer productQuantity;
}
