using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using SocialMedia.Domain;
using SocialMedia.Persistance;

namespace SocialMedia.Application
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;

            //private readonly ILogger<Handler> _logger;
            public Handler(DataContext context)
            {
                //_logger = logger;
                _context = context;
            }

            ///<Summary>
            /// Examplifying task cancellation operation
            ///</Summary>
            // public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            // {
            //     try
            //     {
            //         for (var i = 0; i < 10; i++)
            //         {
            //             cancellationToken.ThrowIfCancellationRequested();
            //             await Task.Delay(1000, cancellationToken);
            //             _logger.LogInformation($"Task {i} is comleted");
            //         }
            //     }
            //     catch (Exception ex) when (ex is TaskCanceledException)
            //     {
            //         _logger.LogInformation("Task is cancelled");
            //     }
            //     return await _context.Activities.ToListAsync(cancellationToken);
            // }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}
