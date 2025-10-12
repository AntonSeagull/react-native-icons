

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiElectronfiddle = (props: IconProps) => {

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
          <Path  d="M8 0c-.6312 0-1.1429.5117-1.1429 1.1429v13.8583c-1.9716.5075-3.4285 2.2973-3.4285 4.4274C3.4286 21.9533 5.4753 24 8 24c2.5247 0 4.5714-2.0467 4.5714-4.5714 0-2.1301-1.4569-3.92-3.4285-4.4274v-4.7155h4.7346c.541 0 .9796-.5117.9796-1.1428 0-.6312-.4386-1.1429-.9796-1.1429H9.143V2.2857h10.2857c.6312 0 1.1428-.5117 1.1428-1.1428C20.5714.5117 20.0598 0 19.4286 0Zm0 17.1429c1.2624 0 2.2857 1.0233 2.2857 2.2857 0 1.2623-1.0233 2.2857-2.2857 2.2857-1.2624 0-2.2857-1.0234-2.2857-2.2857 0-1.2624 1.0233-2.2857 2.2857-2.2857z" />
        </G>
      </Svg>
    );
  }

