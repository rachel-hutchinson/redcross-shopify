import { Page, Layout } from "@shopify/polaris";
import { ClickSitService } from "../server/clicksit/client";
import ResourceListWithOrders from "../components/ResourceList";
import { getSessionToken } from "@shopify/app-bridge-utils";

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.clickSitService = new ClickSitService(props.appBridge);
  }

  state = {
    orders: [],
    open: false
  }

  render() {

    // const sessionToken = await getSessionToken(this.props.appBridge);
    // console.log(sessionToken);

    return (
      <Page fullWidth
        title="Orders"
        primaryAction={{
          content: 'Clicksit Test', onAction: async () => {

            let labels = await this.clickSitService.createReturnLabels("asd", "email@yahoo.com");
            let trackStatus = await this.clickSitService.getTrackingStatus("82PJG8303119A040");

            console.log(labels);
            console.log(trackStatus);
          }
        }}
        secondaryActions={[{

          content: 'GraphQL Test', onAction: async () => {
            console.log("GraphQL event");


          }
        }]}
      >
        <Layout>
          <Layout.Section>
            {
              /* Page-level banners */
            }
          </Layout.Section>
          <Layout.Section>
            {
              /* Orders component */
              <ResourceListWithOrders />
            }
          </Layout.Section>
          <Layout.Section>
            {
              /* Footer*/
            }
          </Layout.Section>
          <Layout.Section>
            {
              /* Page footer content */
            }
          </Layout.Section>
        </Layout>
      </Page>
    )
  }
}

export default Index;
