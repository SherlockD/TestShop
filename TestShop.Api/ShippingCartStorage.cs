using Microsoft.AspNetCore.Mvc;
using TestShop.Api.Entities;

namespace TestShop.Api
{
    public class ShippingCartStorage
    {
        public static ShippingCartStorage Instance 
        { 
            get
            {
                _instance = _instance ?? new ShippingCartStorage();
                return _instance;
            }
        }
        private static ShippingCartStorage _instance;

        public List<Product> CartItems { get; set; } = new List<Product>();
    }
}
