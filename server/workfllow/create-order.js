export const createOrder = async (order) => {
  const s = 200;

  return new Promise((resolve, reject) => {
    console.log("CreateOrderFlow::", order);

    // Validate the order

    // Generate address labels

    // Call Clicksit to generate the return labels

    // Update order reference with tracking number from Clicksit and fulfillment_status to Fulfilled
    // Double check the status and if we can use the reference property to store the tracking number

    // Send labels to Sharepoint, investigate use of streams


    if (s === 200) {
      resolve(200);
    } else {
      reject("Create order flow failed to succeed.");
    }

  });
}
