

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBedFilled = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 6a1 1 0 0 1 .993 .883l.007 .117v6h6v-5a1 1 0 0 1 .883 -.993l.117 -.007h8a3 3 0 0 1 2.995 2.824l.005 .176v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-3h-16v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-11a1 1 0 0 1 1 -1z" />
          <Path  d="M7 8a2 2 0 1 1 -1.995 2.15l-.005 -.15l.005 -.15a2 2 0 0 1 1.995 -1.85z" />
        </G>
      </Svg>
    );
  }

