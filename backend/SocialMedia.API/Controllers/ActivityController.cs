using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SocialMedia.Application;
using SocialMedia.Domain;

namespace SocialMedia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivityController(IMediator mediator)
        {
            _mediator = mediator;
        }

        ///<Summary>
        ///Using the commented code from handler with CancellationToken
        ///</Summary>
        // [HttpGet]
        // public async Task<ActionResult<List<Activity>>> List(CancellationToken cancellationToken)
        // {
        //     return await _mediator.Send(new List.Query(), cancellationToken);
        // }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List(CancellationToken cancellationToken)
        {
            return await _mediator.Send(new List.Query(), cancellationToken);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Detail(Guid id)
        {
            return await _mediator.Send(new Detail.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            Console.WriteLine("Put request sent successfully");
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}