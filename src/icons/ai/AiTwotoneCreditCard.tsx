

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiTwotoneCreditCard = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 512, 512)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#D9D9D9" d="M136 792h752V440H136v352zm507-144c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72zM136 232h752v120H136z" />
          <Path  d="M651 728h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z" />
          <Path  d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V440h752v352zm0-440H136V232h752v120z" />
        </G>
      </Svg>
    );
  }

