

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcOrganization = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M42,42H6V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V42z" fill="#90CAF9" />
        </G>
      </Svg>
    );
  }

