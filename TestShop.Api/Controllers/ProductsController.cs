using Microsoft.AspNetCore.Mvc;
using TestShop.Api.Entities;

namespace TestShop.Api.Controllers
{
    [ApiController]
    [Route( "[controller]" )]
    public class ProductsController : ControllerBase
    {
        private readonly List<Product> _products = new List<Product>();

        public ProductsController()
        {
            _products.Add( new Product() { Id = 0, Name = "IPhone 11", Description = "You can buy phone: IPhone 11", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
            _products.Add( new Product() { Id = 1, Name = "IPhone 11 pro", Description = "You can buy phone: IPhone 11 pro", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
            _products.Add( new Product() { Id = 2, Name = "IPhone 12", Description = "You can buy phone: IPhone 12", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
            _products.Add( new Product() { Id = 3, Name = "IPhone 12 mini", Description = "You can buy phone: IPhone 12 mini", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
            _products.Add( new Product() { Id = 4, Name = "IPhone 13", Description = "You can buy phone: IPhone 13", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
            _products.Add( new Product() { Id = 5, Name = "IPhone 13 mini", Description = "You can buy phone: IPhone 13 mini", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
            _products.Add( new Product() { Id = 6, Name = "IPhone 14", Description = "You can buy phone: IPhone 14", ImageLink = "https://avatars.mds.yandex.net/get-mpic/4076910/img_id8024132438698652359.jpeg/orig" } );
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok( _products );
        }


        [HttpGet, Route( "{id}" )]
        public IActionResult GetProduct( int id )
        {
            return Ok( _products.First( p => p.Id == id ) );
        }
    }
}