import type { GetProp } from "antd";
import { Input, Space, Typography } from "antd";

const { Title } = Typography;

const OtpEnter = () => {
  const onChange: GetProp<typeof Input.OTP, "onChange"> = (text) => {
    console.log("onChange:", text);
  };
  const sharedProps = {
    onChange,
  };
  return (
    <Space direction="vertical">
      <Title level={5}>With Length (8)</Title>
      <Input.OTP length={4} {...sharedProps} />
    </Space>
  );
};

export default OtpEnter;
