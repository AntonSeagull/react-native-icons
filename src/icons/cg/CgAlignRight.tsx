

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAlignRight = (props: IconProps) => {

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
          <Path d="M15.9991 13.0039L9.99907 12.9911L9.99054 16.9911L15.9905 17.0039L15.9991 13.0039Z" fill="currentColor" />
          <Path d="M19.978 18.0021L20.0036 6.00214L18.0036 5.99788L17.978 17.9979L19.978 18.0021Z" fill="currentColor" />
          <Path d="M3.9964 10.9851L15.9964 11.0107L16.0049 7.0107L4.00493 6.98512L3.9964 10.9851Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

