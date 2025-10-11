

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcFeedIn = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#2196F3" d="M38,24v12c0,1.1-0.9,2-2,2H12c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6h0v4h0c1.1,0,2,0.9,2,2v12 c0,3.3,2.7,6,6,6h24c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h0v-4h0C40.7,18,38,20.7,38,24z" />
        </G>
      </Svg>
    );
  }

