using Microsoft.AspNetCore.Mvc;
using TestShop.Api.Entities;

namespace TestShop.Api.Controllers
{
    [Route( "[controller]" )]
    public class ShoppingCartItemsController : Controller
    {
        private readonly ShippingCartStorage _storage = ShippingCartStorage.Instance;

        [HttpGet]
        public IActionResult Get()
        {
            return Ok( _storage.CartItems );
        }

        [HttpPost]
        public IActionResult AddProductToShoppingCart( [FromBody] Product product )
        {
            _storage.CartItems.Add( product );

            return Ok();
        }
    }
}
