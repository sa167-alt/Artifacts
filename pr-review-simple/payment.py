TAX_RATE = 0.08


   def calculate_total(subtotal):
       """Calculate order total including tax."""
       tax = subtotal * TAX_RATE
       return subtotal + tax
