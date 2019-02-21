using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using Newtonsoft.Json;

namespace IdentityServer.SecurityClient.Model {

  /// <summary>
  /// 
  /// </summary>
  [DataContract]
  public class AccessResponse : ActionResponse {
    /// <summary>
    /// Gets or Sets UserId
    /// </summary>
    [DataMember(Name="userId", EmitDefaultValue=false)]
    [JsonProperty(PropertyName = "userId")]
    public string UserId { get; set; }

    /// <summary>
    /// Gets or Sets AccessRightNames
    /// </summary>
    [DataMember(Name="accessRightNames", EmitDefaultValue=false)]
    [JsonProperty(PropertyName = "accessRightNames")]
    public Dictionary<string, bool?> AccessRightNames { get; set; }


    /// <summary>
    /// Get the string presentation of the object
    /// </summary>
    /// <returns>String presentation of the object</returns>
    public override string ToString()  {
      var sb = new StringBuilder();
      sb.Append("class AccessResponse {\n");
      sb.Append("  UserId: ").Append(UserId).Append("\n");
      sb.Append("  AccessRightNames: ").Append(AccessRightNames).Append("\n");
      sb.Append("}\n");
      return sb.ToString();
    }

    /// <summary>
    /// Get the JSON string presentation of the object
    /// </summary>
    /// <returns>JSON string presentation of the object</returns>
    public new string ToJson() {
      return JsonConvert.SerializeObject(this, Formatting.Indented);
    }

}
}
