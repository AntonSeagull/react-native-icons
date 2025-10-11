

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDot1dot1dot1 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5.389 0A5.377 5.377 0 0 0 0 5.389V18.61A5.377 5.377 0 0 0 5.389 24H18.61A5.377 5.377 0 0 0 24 18.611V5.39A5.377 5.377 0 0 0 18.611 0Zm11.546 4.595h.942v3.122h.69v.868h-.69v1.201h-1.001V8.585H14.68v-.964zm-6.07.589h2.523v14.842h-3.094V9.79H6.68V7.805c.95-.042 1.616-.103 1.997-.184.606-.13 1.1-.39 1.48-.779.26-.266.457-.62.592-1.064.077-.267.116-.464.116-.594Zm5.989.73L15.513 7.72h1.365V5.915Z" />
        </G>
      </Svg>
    );
  }

