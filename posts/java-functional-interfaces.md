---
layout: blog
title: "Java: Functional Interfaces"
author: Eduardo Paiva
date: 2022-05-29 08:18:38
tags:
  - java
  - desenvolvimento profissional
categories:
  - quebre ó codigo
thumbnail: https://images.unsplash.com/photo-1459755486867-b55449bb39ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869
featured_image:
  src: https://images.unsplash.com/photo-1459755486867-b55449bb39ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869
  alt: Xícara de café cheia com um desenho de coração no café. Há grãos de café
    jogados na mesa, em cima da mesa há também um celular branco e um pote
    branco de café ao fundo.
---
## Functional Interfaces: Predicate, Function, Consumer e Supplier.

\
Em 2022 o **Java** já se encontra na versão 18, porém o impacto da versão 8 (lançada no ano de 2014) foi muito grande, afinal essa versão ficou famosa por introduzir vários conceitos novos na linguagem e aproximá-la da possibilidade de um paradigma funcional.\
\
O **Java 8** introduziu o conceito de expressões **Lambda** e também o conceito de Interfaces Funcionais ***(Functional Interfaces).*** Uma Functional Interface é uma interface que possui apenas um método abstrato. Uma expressão Lambda pode ser vista com uma instância de uma Functional Interface. Esse tipo de interface pode ter também **Default Methods**, porém esse tipo de método será tratado em outro artigo.\
\
Algumas interfaces funcionais muito úteis são: **Consumer, Predicate, Supplier** e **Function**. Você pode achar que não, mas se você é um desenvolvedor Java, provavelmente já as usou. Segue uma tabela indicando os tipos de interfaces, bem como a entrada e saída de cada um dos métodos destas.

![Java: Functional Interfaces](https://i0.wp.com/javagyansite.com/wp-content/uploads/2018/12/functional-interfaces.png?resize=768%2C447&ssl=1)

Como pode ser visto no quadro:

* **Predicate (Predicado):** Aceita um argumento. Produz resultado **true** ou **false**
* **Function (Função):** Aceita um argumento. Produz um resultado.
* **Consumer (Consumidor):** Aceita um argumento. Não produz resultado.
* **Supplier (Fornecedor):** Não aceita argumentos. Produz um resultado.



### Exemplos

\
O exemplo abaixo é da implementação da Functional Interface chamada ***Supplier*** (em tradução livre Fornecedor). Note que ela possui a Annotation @FunctionalInterface

```java
/*
 * Copyright (c) 2012, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */
package java.util.function;

/**
 * Represents a supplier of results.
 *
 * <p>There is no requirement that a new or distinct result be returned each
 * time the supplier is invoked.
 *
 * <p>This is a <a href="package-summary.html">functional interface</a>
 * whose functional method is {@link #get()}.
 *
 * @param <T> the type of results supplied by this supplier
 *
 * @since 1.8
 */
@FunctionalInterface
public interface Supplier<T> {

    /**
     * Gets a result.
     *
     * @return a result
     */
    T get();
}
```

Façam um estudo e entrem no pacote **java.util.function** e vejam que as interfaces aqui citadas possuem mais conteúdo dentro delas. Vocês verão os **Default Methods**, métodos com implementação dentro de uma interface, que ajudam a compor o comportamento esperado.

### Exemplo prático retirado do curso do Linkedin Learning - Nail the Java Interview ([Kathryn Hodge](https://www.linkedin.com/in/blondiebytes/))

```java
import java.util.ArrayList;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.IntPredicate;
import java.util.function.Supplier;

public class Main {

    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        students.add("Sally");
        students.add("Polly");
        students.add("Molly");
        students.add("Tony");

        // Consumer
        Consumer<String> printItem = n -> System.out.println(n);
        students.forEach(printItem);

        // Function
        Function<Integer, Integer> doubly = n -> n * n;
        System.out.println(doubly.apply(8));

        // Predicate
        IntPredicate isDivByThree = n -> n % 3 == 0;
        System.out.println(isDivByThree.test(3));

        // Supplier
        Supplier<Double> randomNumUnder100 = () -> Math.random() * 100;
        System.out.println(randomNumUnder100.get());
    }
}
```

No exemplo acima, fica claro o que foi nos mostrado no quadro, o que cada tipo de interface aceita como argumento e produz como resultado.\
\
Antes do **Java 8**, algumas das interfaces já existiam, interfaces como **Runnable** e **Callable**, a partir do Java 8 elas foram apenas marcadas com a annotation @FunctionalInterface.

Em um projeto recente que pude trabalhar, eu e meus colegas de equipe utilizamos a Functional Interface chamada **UnaryOperator**, ela é uma subclasse da **Function** e basicamente ela executa uma operação em um único operador e retorna um objeto do mesmo tipo desse operador. Foi muito útil, pois tínhamos o padrão **Chain Of Responsibility** e executávamos a operação em cima de um tipo em comum e sempre retornávamos esse tipo.\
\
Bom, esse foi o texto sobre algumas das interfaces funcionais introduzidas no Java 8, muitas delas fazem parte do nosso dia a dia como a ***Predicate***, que utilizamos bastante ao fazermos um filtro. No fim, esse conhecimento é sempre bom, seja pra nos tornamos programadores melhores e entendermos o que estamos utilizando, seja pra responder perguntas capciosas em entrevistas kkkkk.

Para mais informações sobre Java, sigam o blog [Baeldung](https://www.baeldung.com/), sigam o desenvolvedor brasileiro [Victor Osório](https://vepo.github.io/) e para informações mais densas podem recorrer aos livros: 

[Java Efetivo: as melhores práticas para plataforma Java.](https://amzn.to/3GF2hdV)

[](https://amzn.to/3GF2hdV)[Modern Java in Action: Lambdas, streams, functional and reactive programming](https://amzn.to/3NeMe8Y)\
\
Referências:

[https://www.baeldung.com/java-8-functional-interfaces ](https://www.baeldung.com/java-8-functional-interfaces)

<https://javagyansite.com/2018/12/27/functional-interfaces-predicate-consumer-function-and-supplier/>\
\
<https://www.linkedin.com/learning/nail-your-java-interview-2>