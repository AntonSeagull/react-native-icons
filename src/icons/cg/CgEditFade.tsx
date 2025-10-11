

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgEditFade = (props: IconProps) => {

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
          <Path d="M8 12C8 10.5194 8.8044 9.22675 10 8.53513V15.4649C8.8044 14.7733 8 13.4806 8 12Z" />
          <Path d="M14 15.4649V8.53513C15.1956 9.22675 16 10.5194 16 12C16 13.4806 15.1956 14.7733 14 15.4649Z" />
          <Path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
        </G>
      </Svg>
    );
  }

