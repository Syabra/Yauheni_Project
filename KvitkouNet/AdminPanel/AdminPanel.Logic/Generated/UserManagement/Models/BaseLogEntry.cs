// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace AdminPanel.Logic.Generated.UserManagement.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class BaseLogEntry
    {
        /// <summary>
        /// Initializes a new instance of the BaseLogEntry class.
        /// </summary>
        public BaseLogEntry()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the BaseLogEntry class.
        /// </summary>
        public BaseLogEntry(System.DateTime eventDate, string id = default(string))
        {
            Id = id;
            EventDate = eventDate;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "eventDate")]
        public System.DateTime EventDate { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="Microsoft.Rest.ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
            //Nothing to validate
        }
    }
}
