// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace AdminPanel.Logic.Generated.UserManagement.Models
{
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public partial class ForUpdateModel
    {
        /// <summary>
        /// Initializes a new instance of the ForUpdateModel class.
        /// </summary>
        public ForUpdateModel()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the ForUpdateModel class.
        /// </summary>
        public ForUpdateModel(System.DateTime birthday, string firstName = default(string), string lastName = default(string), IList<string> adress = default(IList<string>), IList<string> phones = default(IList<string>), string sex = default(string))
        {
            FirstName = firstName;
            LastName = lastName;
            Adress = adress;
            Phones = phones;
            Sex = sex;
            Birthday = birthday;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "firstName")]
        public string FirstName { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "lastName")]
        public string LastName { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "adress")]
        public IList<string> Adress { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "phones")]
        public IList<string> Phones { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "sex")]
        public string Sex { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "birthday")]
        public System.DateTime Birthday { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="Microsoft.Rest.ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
        }
    }
}
